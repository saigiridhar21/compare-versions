# Compare two versions

----
## Usage
compareVersions(x,y)

If x === y, then this returns 0   
If x < y, then this returns -1
If x > y, then this returns 1


## Examples    
         
compareVersions('1.0', '1.0.1')  ->  returns 1  
compareVersions('1.0', '1.0')  ->  returns 0  
compareVersions('1.0.3', '1.0.2')  ->  returns -1

## Installation

### Node.js   

npm install compare-two-versions --save    

### Bower    

bower install compare-two-versions --save   

## To include

```html
<script src="bower_components/compare-versions/compareVersions.js"></script>
