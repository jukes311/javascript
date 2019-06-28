/**
 * Const Example
 * 
 * Const variables allow an object sub-properties to be changed but not the object structure.
 */


const playerCodes = { 
    player1 : 9, 
    player2 : 10, 
    player3 : 13, 
    player4 : 20
}; 
playerCodes.player2 = 11; // OK

// playerCodes = {     //Compiler Error: Cannot assign to playerCodes because it is a constant or read-only
//     player1 : 50,   // Modified value
//     player2 : 10, 
//     player3 : 13, 
//     player4 : 20
// }; 