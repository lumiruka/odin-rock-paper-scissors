function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"]
    let choice = Math.random(1, 3) * (3 - 1) + 1    
    return options[choice]
}