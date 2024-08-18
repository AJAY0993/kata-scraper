You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).


Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!

~~~if:riscv
RISC-V: The function signature is

```c
void fix_the_meerkat(void *meerkat, size_t size);
```

`meerkat` is an array of unknown type, but it always has exactly 3 elements (tail, body, head). `size` is the size (in bytes) of each element in the array. Swap the tail and head of `meerkat` in place. You do not need to return anything.
~~~

