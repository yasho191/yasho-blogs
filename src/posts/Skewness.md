We all have come across the terms outliers or skewness while cleaning or preprocessing data for a project. So, in this article, we will be discussing the following points:

- What is skewness?
- How to identify skewness in data?
- Why is skewness a problem?
- How do we fix this skewness in python?

### What is skewness?
Skewness is an asymmetry in the distribution of data as it does not show any kind of symmetry in continuous data. Skewed data can be of 2 types. Right-Skewed data is also called as Positively-Skewed data and, Left-Skewed data is called as Negatively-Skewed data.

### How to identify if your data is skewed or not?
There are 2 main methods to identify skewness in the data. The first is the Observational method and, the second is the Statistical method.

1. Observational Method

Identification of skewness can be done easily by plotting a histogram and observing a few characteristics.

For a normal distribution i.e a distribution with no skewness the histogram should look like Fig(1) here, both the ends (tail regions) taper equally with a peek at the centre of the distribution like a “Bell-Curve”. For data with no skewness the Mean = Median = Mode.

<img src="static/media/img-1.d95d7f38.png" width="100%"/>

Normal Distribution Fig(1).

For distribution with left-skewness or negative skewness, the histogram should look like Fig(2) here the only the left part of the distribution tapers with the peak shifted towards the right-hand side. For Left-Skewed data the Mode > Median > Mean.

<img src="static/media/img-2.6e6d96e1.png" width="100%"/>

Left-Skewed Data Fig(2).
For distribution with right-skewness or positive-skewness the histogram should look like Fig(3) here the only the right part of the distribution tapers with the peak shifted towards the left-hand side. For Right-Skewed data the Mean > Median > Mode.

<img src="static/media/img-3.553c5507.png" width="100%"/>

Right-Skewed Data Fig(3).

2. Statistical Method

Now, the method we studied above is the observational method. We can also calculate the skewness of our data using statistics as well. So the formula to calculate skewness is given below:

Skewness Formula
The acceptable value of skewness is considered to be between -3 and +3. If the value of skewness falls on either side of this range then it indicates that the skewness must be fixed.


### Why is skewness a problem?
Most of the statistical models do not work when the data is skewed. The reason behind this is that the tapering ends or the tail region of the skewed data distributions are the outliers in the data and it is known to us that outliers can severely damage the performance of a statistical model. The best example of this being regression models that show bad results when trained over skewed data.

### How do we fix this skewness?
Now, as we know that skewness is bad for our data and many machine learning algorithms prefer or perform better when numerical data has a normal distribution we need a way to remove this skewness, to do so in python most frequently used methods are PowerTransformer and QuantileTransformer. Both these methods are used to get a normal or Gaussian-like distribution. Now let us see how to use these methods with an example:

For the example below the dataset considered is the European Credit Card dataset which you can find on Kaggle and I have considered a few random columns with skewness to perform the transformation. The code for implementing the transformers is as following:

<div style="background: rgba(0,0,0,0.25); width: 100%; overflow-x: scroll">
<pre>
<code class="language-python" style="background: rgba(0,0,0,0)">
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd 
from sklearn.preprocessing import PowerTransformer, 
QuantileTransformer
cols1 = ["V1", "V3", "V4"]
def test_transformers(columns):
    pt = PowerTransformer()
    qt = QuantileTransformer(n_quantiles=500, 
    output_distribution='normal')
    fig = plt.figure(figsize=(20,30))
    j = 1
    for i in columns:
        array = np.array(df[i]).reshape(-1, 1)
        y = pt.fit_transform(array)
        x = qt.fit_transform(array)
        plt.subplot(3,3,j)
        sns.histplot(array, bins = 50, kde = True)
        plt.title(f"Original Distribution for {i}")
        plt.subplot(3,3,j+1)
        sns.histplot(x, bins = 50, kde = True)
        plt.title(f"Quantile Transform for {i}")
        plt.subplot(3,3,j+2)
        sns.histplot(y, bins = 50, kde = True)
        plt.title(f"Power Transform for {i}")
        j += 3
test_transformers(cols1)
</code>
</pre>
</div>


<img src="static/media/img-4.26518be4.png" width="100%"/>

PowerTransformer and QuantileTransformer applied on Data

It can be seen that QuantileTransformer has performed better than PowerTransformer in terms of converting the skewed distribution into a normal distribution, but you should always select the method which works best with your data. It’s observed that QuantileTransformer works better on larger datasets than PowerTransformer.
Other methods can be used to reduce the skewness as well. Like for left-skewed data squares, cubes or, higher power transforms can be performed and, for right-skewed data, we can use the Square-root, Cube-root or Log transforms. To know more about these, you can refer to this article.

### Conclusion
We have now learned what skewness is. What are the types of skewness? How to identify skewness by observation and using statistics? How to fix the skewness in our data? If you liked this blog don’t forget to share it with your friends. In case you have any doubts or suggestions, do reply in the comments. Please feel free to contact me via mail and connect with me via Linked In. I hope you enjoyed reading this blog. Happy Learning!