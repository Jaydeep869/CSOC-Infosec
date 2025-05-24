## Bandit OverTheWire Walkthrough

* `ls -alsp` used for listing all the directories and files in detail

### Level 0 : Getting into the game

* Command: `ssh -p 2220 bandit0@bandit.labs.overthewire.org`

---

### Level 0 --> 1

* Opened `readme` file using `cat ./readme`
* Password: `ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If`

---

### Level 1 --> 2

* Opened `-` file using `cat ./-`
* Password: `263JGJPfgU6LtdEvgfWU1XP5yac29mFx`

---

### Level 2 --> 3

* Opened file named `spaces in this filename` using:

  ```bash
  cat spaces\ in\ this\ filename
  ```
* Password: `MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx`

---

### Level 3 --> 4

* Opened `...Hiding-From-You` file in `inhere` directory
* Command: `cat ...Hiding-From-You`
* Password: `2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ`

---

### Level 4 --> 5

* Opened all files in `inhere` one by one
* Got password in file `-file07`
* Command: `cat ./-file07`
* Password: `4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw`

---

### Level 5 --> 6

* Checked directories `maybehereXX` inside `inhere`
* Found password in `maybehere07/.file2`
* Password: `HWasnPhtq9AVKe0dmk45nxy20cvUa6EG`

---

### Level 6 --> 7

* Used `find` command:

  ```bash
  find / -type f -user bandit7 -group bandit6 2>/dev/null
  ```
* Password: `morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj`

---

### Level 7 --> 8

* Used `grep` to find the millionth line:

  ```bash
  grep millionth data.txt
  ```
* Password: `dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc`

---

### Level 8 --> 9

* Sorted the file and checked for unique lines:

  ```bash
  sort data.txt | uniq -u
  ```
* Password: `4CKMh1JI91bUIZZPXDqGanal4xvAg0JM`

---

### Level 9 --> 10

* Opened file, found only one string
* Password: `FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey`

---

### Level 10 --> 11

* Used `base64` decode:

  ```bash
  echo <data> | base64 --decode
  ```
* Password: `dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr`

---

### Level 11 --> 12

* Used `rot13` cipher:

  ```bash
  cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
  ```
* Password: `7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4`

---

### Level 12 --> 13

* Created dir, copied `data.txt`, checked file type using `file`
* Renamed and decompressed using `tar`, `gzip`, `bzip2`
```bash
tar -d filename.tar
gzip -d filename.gz
bzip2 -d filename.bz2
cp x directory_name
mv x x.tar
mv x x.gz
mv x x.bz2
```
* Final password in `data8` file
* Password: `FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn`

---

### Level 13 --> 14

* Logged in using SSH private key

  ```bash
  ssh -i sshkey.private bandit14@localhost -p 2220
  ```
* Password: `MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS`

---

### Level 14 --> 15

* Used netcat:

  ```bash
  nc localhost 30000
  ```
* Password: `8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo`

---

### Level 15 --> 16

* Used `ncat` with SSL:

  ```bash
  ncat --ssl localhost 30001
  ```
* Password: `kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx`

---

### Level 16 --> 17

* Scanned ports using nmap:

  ```bash
  nmap localhost -p 31000-32000
  ```
* Found SSH key at port 31790, saved it with `chmod 400`
* SSH login:

  ```bash
  ssh -i key bandit17@bandit.labs.overthewire.org -p 2220
  ```
* Password: found via SSH

---

### Level 17 --> 18

* Used `diff` command:

  ```bash
  diff passwords.new passwords.old
  ```
* Password: `x2gLTTjFwMOhQ8oWNbMN362QKxfRqGlO`

---

### Level 18 --> 19

* Can't login normally, used alternate shell:

  ```bash
  ssh -t bandit18@bandit.labs.overthewire.org -p 2220 /bin/sh
  ```
* Read file `readme`
* Password: `cGWpMaKXVwDUNgPAVJbWYuGHVn9zl3j8`

---

### Level 19 --> 20

* Used `bandit20-do` binary:

  ```bash
  ./bandit20-do cat /etc/bandit_pass/bandit20
  ```
* Password: `0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO`

---


