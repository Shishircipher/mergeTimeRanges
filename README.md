Problem Description

You are given an array of time ranges representing when a system was active. Each range is an array [start, end] where: start and end are UNIX timestamps in milliseconds.

The range includes start and excludes end. For example the range [0,5] will include 0 but exclude 5 so the numbers in the range are 0,1,2,3,4

However:

Ranges may overlap or touch.
Some may be separated by small gaps.
Gaps smaller than a given threshold (in milliseconds) should be treated as continuous and merged.