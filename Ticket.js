

let age = 25;  
let isStudent = true;  
let regularFare = 800;
let ticketFare = 0;

if (age < 10) {
    ticketFare = 0;
    console.log("Children under 10: Ticket fare is free.");
} else if (isStudent) {
    ticketFare = regularFare * 0.5;
    console.log("Student: Ticket fare is " + ticketFare + " tk (50% discount).");
} else if (age >= 60) {
    ticketFare = regularFare * 0.85;
    console.log("Senior citizen: Ticket fare is " + ticketFare + " tk (15% discount).");
} else {
    ticketFare = regularFare;
    console.log("Regular fare: Ticket fare is " + ticketFare + " tk.");
}
