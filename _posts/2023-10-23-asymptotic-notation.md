---
title: Asymptotic Notation - Harvard CS50
excerpt: "Asymptotic notation, specifically Big O notation, is a way to analyze the runtime growth of programs as the size of inputs increases. It allows us to compare the efficiency of algorithms. For example, an algorithm with a runtime of O(n) grows linearly with the input size, while an algorithm with a runtime of O(1) has constant time regardless of input size. Other notations, such as O(n^2) and O(log n), represent slower and faster runtimes, respectively. Best-case and worst-case scenarios can also be considered using symbols like Ω (omega) and Θ (theta)."
---


## What does it mean for an algorithm to be fast or efficient?

We don't compare using time.

My computer is different then your, and the time doesn’t means my algorithm is more efficiently or less

How do we compare?

### Big O Notation

 A Basic way of analyzing how fast a programs runtime grows asymptotically.

Runtime grows asymptotically is as the size of your inputs increase towards infinity.

- You are sorting an array of size 1000 compared to an array of size 10, how does the runtime of your program grow?

Example:

Imagine counting the numbers of characters in a string by walking through the whole string letter-by-letter and adding 1 to a counter for each character.

![R A V I - 1 2 3 4.png](https://i.imgur.com/BNgZfAR.png)

n → “n” characters in string → n = 4

$$ O(n) $$

Why ?

Using this approach, the time required to traverse the entire string is proportional to the number of characters

Counting the number of characters in a 20-character string is going to take twice long as it takes to count the characters in a 10-character string

> Because you have to look at all the characters
> 

As you increase the number of characters, the runtime will increase linearly with the input length

![O(n) grafico (1).png](https://i.imgur.com/cHyLSk6.png)

Try something different.

What if you would happen to already store the number of characters in the string

```python
len = 1000
```

Then all you’d have to do now to find out the string length, is check what the value of the variable is.

You wouldn’t have to look at the string itself at all. And aces the value of a variable like ‘len’ is considered an asymptotically constant time operation

$$O(1)$$

Are many different big O runtimes to measure algorithms. 

$$O(n)^2$$ algorithms are asymptotically slower than $$O(n)$$ algorithms.

- This doesn’t means $$O(n)$$ algorithms always run faster than $$O(n)^2$$  algorithms.
    
    > Maybe for small input sizes, the $$O(n)^2$$ algorithm might actually work faster.
    > 
    > 
    > But, eventually as the input size increases towards infinity the $$O(n)^2$$ algorithms runtime will eventually eclipse the runtime of the $$O(n)$$ algorithm
    
    
![desmos-graph (2).png](https://i.imgur.com/2Wa7OOE.png)
    

Another asymptotic complexity is logarithmic time $$O(log n)$$

![desmos-graph (3).png](https://i.imgur.com/xPNnErT.png)

An example of an algorithm that run this quickly is the binary search algorithm for finding an element in an already sorted list of elements.

Example: 

Let’s say you’re looking for the number 3 in this array of integers

[1, 2, 3, 4, 5, 6, 7]

It looks at the middle element of the array and asks

> Is the element i want greater than, equal to, or less the this?
> 
1. If it’s equal, then great. You found the element, and you’re done.
2. If it’s greater, then you know the element has to be in the right side of the array.
3. If it’s smaller, then you know it has to be in the left side.

This process is then repeated with the smaller-size array until the correct element is found.

[1, 2, 3]

[ 3 ]

This powerful algorithm cuts the array size in half with each operation. So, to Find element in a sorted array of size 8, at most log of $$log_2(8)$$

- Size 8 —> 3 operations $$log_2(8)$$
- Size 16 —> 4 operations $$log_2(16)$$

Doubling the size of the array, increases the runtime by only 1 chuck of this code. Checking the middle element of the list, then splitting

$$
O(log(n))
$$

Doesn’t this depend on where in the list the element you’re looking for is?

- What if the first element you look happens to be the right one?
    
    → Then, it only takes 1 operation, no matter how big the list is.
    
- That’s why computer scientists have more terms for asymptotic complexity which reflect the **best-case** and **worst-case** performances of an algorithm**.**
    
    → **Upper** and **lower bound** on the runtime
    

In the best case for binary search, our element is right there in the middle

[1, 2, 3, 4, 5, 6, 7]

And you get it in constant time, no matter how big the rest of array is.

The symbol used for this is $$\Omega$$ (*omega*).  So, this algorithm is said to run in $$\Omega(1)$$.

But in the worst case, it has to perform $logn$ split checks of the array to find the right element. Worst-case upper bounds are referred too with big $$O$$ that you already know.

  

$$
\Omega(1)O(logn)
$$

One more symbol used is $$\Theta$$  (*theta*). This can be used to describe algorithms where the best and worst cases are the same. 

$$
\Omega(1) \text{ and } O(1) \implies \theta(1)
$$