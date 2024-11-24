const Outing = require("../models/outingModel");

// create new outing event
exports.createNewOuting = async (req, res) => {
    // get form data
    const { newGroupName, newAdminName, newAdminPass } = req.body;
    
    // generate random join code
    function genJoinCode() {
        let result = ''
        async function checkUnique(str){
            try {
                const jC = await Outing.findOne({ joinCode: str }); // Equality query
                if (jC) {
                    return false;
                } else {
                    return true;
                }
            } catch (error) {
                console.error('Error querying the database:', error);
            }
        }
        do{
            ;
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < 6) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
        } while(checkUnique(result) === false)
        

        return result;
    }
    let joinCode = genJoinCode();
    
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    // make new entry
    Outing.create({
        name: newGroupName,
        admin: {
            adminName: newAdminName,
            adminPass: newAdminPass
        },
        status: "accepting",
        joinCode: joinCode
    })

<<<<<<< Updated upstream
    res.status(200).json({ "message": success });
=======
    res.status(200);
>>>>>>> Stashed changes
}

// add new (non admin) user to event
exports.userJoin = async (req, res) => {
    const { joinCode, newUserName, newUserPass } = req.body;
    const newUser = {userName : newUserName, userPass : newUserPass};
    //const outingID = Outing.findOne({ $project: {joinCode : joinCode}})

    await Outing.updateOne(
        { $addToSet: { users: newUser } }
    );

    res.status(200).json({ "message": "success" });

    
}

// login (admin & non admin) to event
exports.login = async (req, res) => {
    const { groupCode, name , pass } = req.body;

    const currentUser = {userName : name, userPass : pass};

    let search = Outing.find({
        users : {$elemMatch : currentUser}
    });
    search = (await search).length;
    if(search === 0){
        res.status(200).json({ "message": "User does not exist in this outing. Try joining the group instead." });
    } else {
        res.status(200).json({ "message": "success" });
    }
}