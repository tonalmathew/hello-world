### Hello World in different languages

_View [contributors.md](contributors.md) file before contributing._

- ### Actionscript

```actionscript


import flash.display.Sprite;

public class Main extends Sprite {

    public function Main() {
        super();

        trace("Hello World!");
    }

}

```
------------------------------------------------------------------------

- ### Ada

```ada

with Ada.Text_IO;

procedure Hello is
begin
   Ada.Text_IO.Put_Line("Hello World!");
end Hello;

```

-------------------------------------------------------------------------

- ### Assembly Language

```assemblylanguage

  global  _main
    extern  _printf

    section .text
_main:
    push    message
    call    _printf
    add     esp, 4
    ret
message:
    db  'Hello World!', 10, 0

```

------------------------------------------------------------------------

- ### B

```b

main()
{
  putstr("Hello World!*n");
  return(0);
}

```

-------------------------------------------------------------------------

- ### Bash

```Bash

echo "Hello World!"

```

--------------------------------------------------------------------------

- ### Basic

```Basic

PRINT "Hello World!"

```

--------------------------------------------------------------------------

- ### BrainFuck

``` brainfuck
>++++++++[<+++++++++>-]<.>++++[<+++++++>-]<+.+++++++..+++.>>++++++[<+++++++>-]<+
+.------------.>++++++[<+++++++++>-]<+.<.+++.------.--------.>>>++++[<++++++++>-
]<+.
```

----------------------------------------------------------------------------

- ### c

```c
#include <stdio.h>
void main() {
   printf("Hello World!");
}
```

-------------------------------------------------------------------------

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

--------------------------------------------------------------------------

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

--------------------------------------------------------------------------

- ### Cobol

``` cobol
program-id. hello.
    procedure division.
        display "Hello World!".
        stop run.
```

--------------------------------------------------------------------------

- ### Cobra

```cobra

class Hello

    def main
        print 'Hello World!'
```

-------------------------------------------------------------------------

- ### CoffeeScript

``` coffeescript
console.log ‘Hello World!’
```

--------------------------------------------------------------------------

- ### Ceylon

```ceylon


void hello() {
    print("Hello World!");
}

```

--------------------------------------------------------------------------

- ### dart

```dart

void main() {
  print('Hello World!');
}
```

--------------------------------------------------------------------------

- ### Delphi

```delphi

program HelloWorld;
begin
  Writeln('Hello World!');
end.

```

--------------------------------------------------------------------------

- ### Django

```py

import django.http from HttpResponse

def print(request):
      return HttpResponse("Hello World!")

```

---------------------------------------------------------------------------

- ### Eiffel 

```eiffel

class
    HELLO_WORLD
create
    make
feature
    make
        do
            print ("Hello world!%N")
        end
end

```

-------------------------------------------------------------------------

- ### Fortran

```fortran

PROGRAM Hello
WRITE (*,*) 'Hello World!'
STOP
END

```

-------------------------------------------------------------------------

- ### go

```go
package main
import "fmt"
func main() {
    fmt.Println("Hello World!")
}
```

--------------------------------------------------------------------------

- ### Haskell

``` haskell
main = putStrLn "Hello World!"
```

--------------------------------------------------------------------------

- ### HTML

```html

<h1>Hello World!<h1>
 ```
 
 --------------------------------------------------------------------------


- ### Javascript

```js
console.log("Hello World!");
```

 
 -------------------------------------------------------------------------
 
 - ### Java

```java
class helloWorld {
public static void main() {
System.out.println('Hello World!')
 }
}
```

----------------------------------------------------------------------------

- ### Julia

``` Julia
println(“Hello World!”)
```

----------------------------------------------------------------------------

- ### jQuery

```js

$("body").append("Hello World!");

```

----------------------------------------------------------------------------

- ### kotlin

```kotlin
fun main() {
    println("Hello World!")
}
```

----------------------------------------------------------------------------

- ### Logo

```logo

print [Hello World!]

```

---------------------------------------------------------------------------

- ### Lua

```lua

print("Hello World!")
 ```
 
 ----------------------------------------------------------------------------
 
 - ### Matlab

``` matlab
disp('Hello World!')
```

----------------------------------------------------------------------------

- ### NodeJs

```js
console.log('Hello World!');
```

-----------------------------------------------------------------------------

- ### Objective-C

```objectivec

#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSLog(@"Hello World!");
    }
    return 0;
}

```

-----------------------------------------------------------------------------

- ### Pascal

``` pascal
Program HelloWorld(output);
begin
  writeln('Hello World!');
end.
```

----------------------------------------------------------------------------

- ### Perl

``` Perl
print "Hello World!";
```

----------------------------------------------------------------------------
 
 - ### PHP

```php
<?php
  echo 'Hello World!';
?>
```

----------------------------------------------------------------------------

- ### PL/SQL

```SQL

BEGIN
dbms_output.put_line (‘Hello World!');
END;

```

-----------------------------------------------------------------------------

- ### Prolog

``` prolog
main:-
        process,
        halt.
process:-
        write('Hello World!').
:- main.
```

----------------------------------------------------------------------------

- ### python

 ```python

 print('Hello World!')
 ```
 
 ----------------------------------------------------------------------------


- ### R

```R

print("Hello World!")
 ```
 
 -----------------------------------------------------------------------------

- ### Ruby

```ruby
puts "Hello World!"
```

------------------------------------------------------------------------------

- ### Rust

``` Rust
fn main() {
    println!("Hello World!");
}
```

------------------------------------------------------------------------------

- ### Scala

``` scala
object Solution
{
  def main(args: Array[String])
    {
      println("Hello World!")
    }
}
```

------------------------------------------------------------------------------

- ### Smalltalk

```smallTalk

Transcript show: 'Hello, world!'; cr.

```

-------------------------------------------------------------------------------

- ### Swift

``` Swift
import swift
print("Hello World!")
```

-------------------------------------------------------------------------------

- ### TypeScript 

```ts 

console.log("Hello World!")

```

------------------------------------------------------------------------------

- ### VB.net

```vb
Live Demo

Imports System
Module Module1
   Sub Main()
      Console.WriteLine("Hello World!")
      Console.ReadKey()
   End Sub
End Module
```

-----------------------------------------------------------------------------

- ### Visual Basic 

```vb

Public Sub Main()
    Debug.Print "Hello World!"
End Sub

```

------------------------------------------------------------------------------
