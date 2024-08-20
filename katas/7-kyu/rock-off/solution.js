function solve(a, b) {
let aliceScore = 0
let bobScore = 0
const l =    a[0] > b[0] ? aliceScore++ : a[0] === b[0] ? '' : bobScore++
const m =    a[1] > b[1] ? aliceScore++ : a[1] === b[1] ? '' :  bobScore++
const n =    a[2] > b[2] ? aliceScore++ : a[2] === b[2] ? '' :  bobScore++
if(aliceScore === bobScore) return `${aliceScore}, ${bobScore}: that looks like a "draw"! Rock on!`
if(aliceScore > bobScore) return `${aliceScore}, ${bobScore}: Alice made "Kurt" proud!`
if(aliceScore < bobScore) return `${aliceScore}, ${bobScore}: Bob made "Jeff" proud!`
// HAPPY CODING!

}