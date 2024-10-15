const { users, rights, userRights } = require("./data");

function getRightIdByUserId(userId) {
  const user = userRights.find((item) => item.userid === userId);
  return user ? user.rightid : null; // Return rightid if user is found, otherwise return null
}

function getRightsByRightId(rightid) {
  const right = rights.find((item) => item.id === rightid);
  return right ? right.omschrijving : null; // Return omschrijving if found, otherwise null
}

const login = (username, wachtwoord, cb) => {
  const user = users.find((user) => user.username === username);
  const rightid = getRightIdByUserId(user.id);
  const rights = getRightsByRightId(rightid);

  if (user.wachtwoord === wachtwoord) {
    cb(`${username}: ${rights}`);
  } else {
    cb("fout bij het aanmelden");
    //   return user ? user.id : null; // Return id if found, otherwise null
  }
};

module.exports = {
  login,
};
