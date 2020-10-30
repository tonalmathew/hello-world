### Different hello world programs

_View [contributors.md](contributors.md) file before contributing._


- ### python

 ```python

 print('Hello World!')
 ```



- ### c

```c
#include <stdio.h>
void main() {
   printf("Hello World!");
}
```


- ### c++

```c++
#include <iostream>
using namespace std;
int main()
{
    cout<<"Hello World!";

    return 0;
}
```


- ### Javascript

```javascript
console.log("Hello World!");
```


- ### Java

```java
class helloWorld {
public static void main() {
System.out.println('Hello World!')
 }
}
```


- ### HTML

```HTML

<h1>Hello World!<h1>
 ```


- ### R

```R

print("Hello World!")
 ```



- ### Lua

```lua

print("Hello World!")
 ```



- ### dart
```dart

void main() {
  print('Hello World!');
}
```

- ### kotlin
```kotlin
fun main() {
    println("Hello World!")
}
```


- ### golang
```go
package main
import "fmt"
func main() {
    fmt.Println("Hello World!")
}
```


- ### PHP
```php
<?php
  echo 'Hello World!';
?>
```

- ### Bash

```Bash

echo "Hello World"

```




- ### Ruby
```ruby
# Hello World in Ruby
puts "Hello World!"
```

- ### Matlab
``` MatLab
disp('Hello World!')
```

- ### C#
``` C#
using System;
class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}
```

- ### Haskell
``` Haskell
main = putStrLn "Hello World!"
```

- ### Scala
``` Scala
object Solution
{
  def main(args: Array[String])
    {
      println("Hello World!")
    }
}
```

- ### Rust
``` Rust
fn main() {
    println!("Hello World");
}
```

- ### Pascal
``` Pascal
Program HelloWorld(output);
begin
  writeln('Hello World!');
end.
```

- ### Prolog
``` Prolog
main:-
        process,
        halt.
process:-
        write('Hello World').
:- main.
```
- ### BrainFuck
``` Brainfuck
>++++++++[<+++++++++>-]<.>++++[<+++++++>-]<+.+++++++..+++.>>++++++[<+++++++>-]<+
+.------------.>++++++[<+++++++++>-]<+.<.+++.------.--------.>>>++++[<++++++++>-
]<+.
```
- ### Swift
``` Swift
import swift
print("Hello World!")
```
- ### Perl
``` Perl
print "Hello World!";
```
- ### Cobol
``` Cobol
program-id. hello.
    procedure division.
        display "Hello World!".
        stop run.
```
- ### Julia
``` Julia
println(“Hello World”)
```
- ### CoffeeScript
``` CoffeeScript
console.log ‘Hello World!’
```

- ### VB.net
``` VB.net
Live Demo

Imports System
Module Module1
   Sub Main()
      Console.WriteLine("Hello World")
      Console.ReadKey()
   End Sub
End Module
```

- ### Cobra

```Cobra

class Hello

    def main
        print 'Hello World.'
```

- ### PL/SQL

```SQL

BEGIN
dbms_output.put_line (‘Hello World..');
END;
/

```

- ### Basic

```Basic

PRINT "Hello World!"

```
- ### GO

```GO

import "fmt"

func main() {

    fmt.Println("!... Hello World ...!")

```

- ### Dart

```Dart

void main()
{
  print("-----Hello World-----");
}

```

- ### Rust
``` Rust
fn main() {
    println!("---Hello World---");
}

```


- ### Matlab

```Matlab

disp('__Hello World!!__')

```


- ### Delphi

```Delphi

program HelloWorld;
begin
  Writeln('Hello, world!');
end.

```


- ### jQuery

```jQuery

$("body").append("Hello world!");

```


- ### Logo

```Logo

print [Hello, world!]

```


- ### C#

```c#

namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}

```
- ### Actionscript

```Actionscript


import flash.display.Sprite;

public class Main extends Sprite {

    public function Main() {
        super();

        trace("Hello, World");
    }

}

```
- ### Objective-C

```Objective-C


#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // insert code here...
        NSLog(@"Hello, World!");
    }
    return 0;
}

```
- ### Ada
```Ada

with Ada.Text_IO;

procedure Hello is
begin
   Ada.Text_IO.Put_Line("Hello, world!");
end Hello;

```
- ### Assembly Language

```Assembly Language

  global  _main
    extern  _printf

    section .text
_main:
    push    message
    call    _printf
    add     esp, 4
    ret
message:
    db  'Hello, World', 10, 0

```
