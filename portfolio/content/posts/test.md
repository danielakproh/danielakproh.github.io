---
date: 2024-10-21T13:47:00-00:00
params:
  math: true
title: Math examples
---

Followed [this tutorial](https://gohugo.io/content-management/mathematics/).

We're using MathJax to render the LateX formulas.

This is an inline \(a^*=x-b^*\) equation.

These are block equations:

\[
\begin{aligned}
KL(\hat{y} || y) &= \sum_{c=1}^{M}\hat{y}_c \log{\frac{\hat{y}_c}{y_c}} \\
JS(\hat{y} || y) &= \frac{1}{2}(KL(y||\frac{y+\hat{y}}{2}) + KL(\hat{y}||\frac{y+\hat{y}}{2}))
\end{aligned}
\]
