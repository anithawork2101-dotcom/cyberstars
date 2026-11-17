open, read, write, close, stat, unlink and readdir, with errno for everything that goes wrong, in one console

---

## Mission: The Tape Library Console

The tape library has a console for its text files. Operators type short commands, and the console does the work with system calls

1. Read commands, one per line, until the input ends, and do them
   - `WRITE name word`: make the file new and empty, and write the word and a new line into it
   - `APPEND name word`: add the word and a new line at the end of a file that already exists. Don't create it
   - `SHOW name`: print what's in the file
   - `COPY from to`: copy the file from into the file to, made new and empty first
   - `REMOVE name`: delete the file
   - `LIST`: print every file in the current directory whose name ends with `.txt`, in alphabetical order, each with its size. Then print `Files: ` and how many there were
2. When a command fails, print the command, the name it was working on, and the reason from strerror, as in the example. For COPY, that's the from file. A command that works prints nothing, except SHOW and LIST
3. Use open, read, write and close for the files, not fopen

For SHOW, read the whole file into a buffer, end it with a `'\0'` and print it with printf, so it comes out in the right order with your other lines. Files have at most 4000 bytes, names at most 30 characters, and words at most 20. There are at most 200 commands

**Example**

Input

```text
WRITE crew.txt ada
APPEND crew.txt ken
SHOW crew.txt
COPY crew.txt backup.txt
APPEND ghost.txt x
LIST
REMOVE crew.txt
LIST
SHOW crew.txt
```

Output

```text
ada
ken
APPEND ghost.txt: No such file or directory
backup.txt 8
crew.txt 8
Files: 2
backup.txt 8
Files: 1
SHOW crew.txt: No such file or directory
```
