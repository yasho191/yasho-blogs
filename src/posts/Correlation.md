Feature selection is an important step in building a good machine learning model, one of the technique that helps us in selecting these features is checking the correlation between different features of the dataset. In this article we will discuss the following:

- What is Pearson Correlation Coefficient?
- How to find the correlation between continuous variables in a dataset?
- How to visualise this correlation?

### What is Pearson Correlation Coefficient?
The Pearson Correlation Coefficient is basically used to find out the strength of the linear relation between two continuous variables, it is represented using r. The mathematical formula to calculate the correlation coefficient is given by:

<img src="static/media/img-1.94bb6948.png" width="100%"/>
<center>Pearson Correlation Formula (Fig 1)</center>

The value of this correlation coefficient ranges from -1 to 1, where 1 signifies positive correlation Fig(2), 0 represents no correlation Fig(3) and -1 represents negative correlation between the two variables Fig(4).

<img src="static/media/img-2.61fa665c.png" width="100%">
<center>Different Types of Correlations</center>

It is important to note that Pearson Correlation only works on continuous data and not on categorical data, for categorical data we have to use a test called Chi-Square Test which we will talk about in later blogs.

### How to find the correlation between continuous variables in a dataset?
Now that you have an idea of what Pearson Correlation Coefficient is we can now move on to actually finding out this coefficient value in python. To find this correlation coefficient there are two ways either using Pandas or using SciPy libraries, we will have a look at both the methods.

For the example I have considered 4 data columns which are randomly initialised and will be finding out the correlation between all the four columns. Below is the code Implementation of finding out correlation coefficients:

Using SciPy:
It is preferred to use stats.pearsonr() when you want to compute correlation for lesser columns.

<div style="background: rgba(0,0,0,0.25); width: 100%; overflow-x: scroll">
<pre>
<code class="language-python" style="background: rgba(0,0,0,0)">
import scipy.stats as stats
import numpy as np
# initialise random data points
data_1 = np.random.randn(1, 20)
data_2 = np.random.randn(1, 20)
# The stats.pearsonr() returns 2 values the correlation 
# coefficient and the p-value
r, p_value = stats.pearsonr(data_1[0], data_2[0])
print(f"Correlation coefficient of data_1 and data_2 = {r}")
</code>
</pre>
</div>

Using Pandas Dataframe:
Pandas has a built-in function called .corr() to find out Pearson correlation so we will use the same.

<div style="background: rgba(0,0,0,0.25); width: 100%; overflow-x: scroll">
<pre>
<code class="language-python" style="background: rgba(0,0,0,0)">
import numpy as np
import pandas as pd
# initialise random data points
data_1 = np.random.randn(1, 20)
data_2 = np.random.randn(1, 20)
data_3 = np.random.randn(1, 20)
data_4 = np.random.randn(1, 20)
data = {"Column 1":data_1[0], 
        "Column 2":data_2[0], 
        "Column 3":data_3[0], 
        "Column 4":data_4[0]}
# Initialise a dataframe with all the columns
df = pd.DataFrame(data)
# .corr() can calculate 'pearson', 'kendall',
# 'spearman' correlations.
print(df.corr(method='pearson'))
</code>
</pre>
</div>

I would suggest you to try implementing these codes yourself for better understanding.

### How to visualise this correlation using Heatmaps?
Now that we have found out these correlation values it would be great if we would be able to visualise the same so that we can interpret the results easily. To do so we will use the Seaborn Library and plot a Heat-map. Every box of this heat-map will be a representation of the correlation coefficient between the corresponding columns in the grid.

<div style="background: rgba(0,0,0,0.25); width: 100%; overflow-x: scroll">
<pre>
<code class="language-python" style="background: rgba(0,0,0,0)">
import seaborn as sns
import matplotlib.pyplot as plt
fig = plt.figure(figsize=(15,10))
sns.heatmap(df.corr(method='pearson'), annot = True, cmap="Blues")
plt.title("Correlation Heatmap")
</code>
</pre>
</div>

<img src="static/media/img-3.6d23c2c6.png" width="100%"/>
<center>Fig 5. Heatmap for Correlation</center>

The diagonal of the heat map will always show value = 1 as it gives the correlation of the column with itself which should be 1 considering the columns are same. So now based on these values, we can find out the columns that are highly correlated and make a decision about the features to be selected.
But the heat-map doesn’t just tell us about the correlation between the independent and target variable it also shows if there is any significant correlation between the independent variables themselves, this is called multi-collinearity which is also an important part for feature selection during Multiple Linear Regression and we will discuss in the upcoming blogs. Till then you can read about this topic here.


### Conclusion
We have now understood what correlation is. How to find out correlation in python? and How to visualise it for better understanding of the results. That’s all for this one! Stay tuned for the upcoming blogs and if you have any suggestions or doubts please comment them down below or mail me. Also do connect with me on LinkedIn. Happy learning to all!