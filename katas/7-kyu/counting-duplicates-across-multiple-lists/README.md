Given multiple lists (`name`, `age`, `height`), each of size `n` :

An entry contains one name, one age and one height. The attributes corresponding to each entry are determined by the index of each list. For example, the first entry is comprised of the first elements of each list, the second entry is comprised of the second elements of each list, etc. 

A duplicate entry is one in which the name, age and height are ALL the same.

Write a function which takes in the attributes for each entry and returns an integer for the number of duplicated entries. For a set of duplicates, the original entry should not be counted as a duplicate.