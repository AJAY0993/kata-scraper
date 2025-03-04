fn high(input: &str) -> &str {
    let mut max :u32 = 0;
    let mut max_word : &str = "";
    for word in input.split(" "){
        let sum = word.chars().map(|c| c as u32 - 96).sum();
        if sum > max {
            max = sum;
            max_word = word;
        }
    }
    return max_word;
}