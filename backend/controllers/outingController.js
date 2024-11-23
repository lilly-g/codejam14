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

    res.status(200).json({ "message": "success" });
}

// add new (non admin) user to event
exports.userJoin = async (req, res) => {
    const { joinCode, newUserName, newUserPass } = req.body;
    res.status(200).json({ "message": "success" });
}

// login (admin & non admin) to event
exports.login = async (req, res) => {
    const { groupCode, name , pass } = req.body;
    res.status(200).json({ "message": "success" });
}