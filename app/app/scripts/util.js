var util = {
    getCrimeAttribute: function(crimeType) {
        if((crimeType === "BATTERY") ||
            (crimeType === "HOMICIDE") ||
            (crimeType === "ASSAULT") ||
            (crimeType === "INTIMIDATION") ||
            (crimeType === "KIDNAPPING") ||
            (crimeType === "OFFENSE INVOLVING CHILDREN")) {
            return {
                symbol : "pitch",
                color : '#dd9787'
            };
        } else if((crimeType === "THEFT") ||
            (crimeType === "ROBBERY") ||
            (crimeType === "MOTOR VEHICLE THEFT") ||
            (crimeType === "CRIMINAL DAMAGE") ||
            (crimeType === "CRIMINAL TRESPASS") ||
            (crimeType === "OBSCENITY") ||
            (crimeType === "BURGLARY")) {
            return {
                symbol : "theatre",
                color : '#822165'
            };
        } else if((crimeType === "CRIM SEXUAL ASSAULT") ||
            (crimeType === "PROSTITUTION") ||
            (crimeType === "STALKING") ||
            (crimeType === "SEX OFFENSE")) {
            return {
                symbol : "school",
                color : '#fbcfb7'
            };
        } else if((crimeType === "PUBLIC PEACE VIOLATION") ||
            (crimeType === "INTERFERENCE WITH PUBLIC OFFICER") ||
            (crimeType === "CONCEALED CARRY LICENSE VIOLATION") ||
            (crimeType === "WEAPONS VIOLATION")) {
            return {
                symbol : "police",
                color : '#337ca0'
            };
        } else if((crimeType === "GAMBLING") ||
            (crimeType === "LIQUOR LAW VIOLATION") ||
            (crimeType === "OTHER NARCOTIC VIOLATION") ||
            (crimeType === "NARCOTICS")) {
            return {
                symbol : "pharmacy",
                color : '#fffc31'
            };
        } else if((crimeType === "DECEPTIVE PRACTICE") ||
            (crimeType === "OTHER OFFENSE") ||
            (crimeType === "NON-CRIMINAL") ||
            (crimeType === "NON - CRIMINAL")) {
            return {
                symbol : "roadblock",
                color : '#3ec300'
            };
        } else if((crimeType === "ARSON")) {
            return {
                symbol : "fire-station",
                color : '#da2c38'
            }
        } else {
            console.log("wtf -_-");
            console.log(crimeType);
            return {
                symbol : "roadblock",
                color : '#3ec300'
            }
        }
    }
};