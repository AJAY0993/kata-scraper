In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

* Years divisible by 4 are leap years,
* but years divisible by 100 are **not** leap years,
* but years divisible by 400 are leap years.

Tested years are in range `1600 ≤ year ≤ 4000`.

~~~if:shell
Echo out `1` if year passed in is a leap year, or `0` otherwise.
~~~

~~~if:sql
### Notes

- Table `years` has two columns: `id`, and `year`.
- Your query has to return rows with two columns: `year`, and `is_leap`.
- Returned rows have to be sorted ascending by the year.
~~~