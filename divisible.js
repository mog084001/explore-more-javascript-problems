/*
1. Show output from: 1-50
2. If the number is divisible by 3 then instead of the number shoe 'foo'
3. 2. If the number is divisible by 5 then instead of the number shoe 'bar'
4. 2. If the number is divisible by both 3 and 5 then instead of the number shoe 'foo'
*/
for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar');
    }
    else if (i % 3 === 0) {
        console.log('foo');
    }
    else if (i % 5 === 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}