// 1.1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
// You want to find a playmate for your dog, preferably of the same breed. So you want to know if 
// anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who 
// here has a golden retriever and would like to be a playdate for my golden. Someone yells
//  - "I do, be happy to bring him over"

// Constant time O(1)
// If you yell in a room of 3 people, 15 people, or 100 people, the time will be the same for the response
// and take the same amount of time to complete. That is the best-case and average-case. If you want to get technical
// the worst-case you would need a megaphone, if there were 1,000,000 people, then you'd need to be really loud. You'd need a 
// different algorithm for that, where you walk around the room or you have A VERY LOUD VOICE / Megaphone - in which case that would be constant too




// 1.2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
// You want to find a playmate for your dog who is of the same breed. So you want to know if anyone 
// out of the 15 people have the same breed as your dog. You start with the first person and ask him
// if he has a golden retriever. He says no, then you ask the next person, and the next, and the next
// until you find someone who has a golden or there is no one else to ask.

//Linear time O(n)
// If you ask 1 person it will take you '1 operation', if you ask 100 people it will take '100 operations'.