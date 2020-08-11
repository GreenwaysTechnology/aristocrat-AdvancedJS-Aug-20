

function sum(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

//tells runtime, to feed sum inside ram.why should i feed into ram.
//who can do a +b , cpu.
//cpu can access instructions from RAM /Registry.
/**
 * if any thing cpu want to access, has to be moved to ram.
 * if any thing want to move to ram, ram will have its own Memory layout.
 * Generally, any program moved from disk to ram- process.
 * process is memory representation of any program.
 * every memory representation will have structure : Heap,stack, programm data.
 * 
 * Stack:
 *  Place where the function runtime memory is allocated, so that cpu come and access
 * 
 */
sum(90,89);
divide(10, 90)