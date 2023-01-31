const IpBuilder = require('../../utilities/IpBuilder');

const ipBuilder = new IpBuilder();

test('Test lenght > 12: 1234567891234', ()=>{
    
    const result = [];
    const ipCollection = ipBuilder.setString('1234567891234').build().sort();

    console.log(ipCollection);

    expect(ipCollection).toEqual(result);
});

test('Test: xxXXxxXXXX', ()=>{
    
    const result = [];
    const ipCollection = ipBuilder.setString('xxXXxxXXXX').build().sort();

    expect(ipCollection).toEqual(result);
});

test('Test: 370XX100A', ()=>{
    
    const result = [];
    const ipCollection = ipBuilder.setString('370XX100A').build().sort();

    expect(ipCollection).toEqual(result);
});

test('Test: 3700100', ()=>{
    
    const result = ['3.70.0.100', '37.0.0.100'].sort()
    const ipCollection = ipBuilder.setString('3700100').build().sort();

    expect(ipCollection).toEqual(result);
});

test('Test: 9743', ()=>{
    
    const result = ['97.43', '9.7.4.3', '9.74.3', '9.7.43', '97.4.3'].sort()
    const ipCollection = ipBuilder.setString('9743').build().sort();

    expect(ipCollection).toEqual(result);
});

test('Test: 255255255255', ()=>{
    
    const result = ['255.255.255.255'].sort()
    const ipCollection = ipBuilder.setString('255255255255').build().sort();

    expect(ipCollection).toEqual(result);
});

test('Test: 88888888', ()=>{
    
    const result = ['88.88.88.88'].sort()
    const ipCollection = ipBuilder.setString('88888888').build().sort();

    expect(ipCollection).toEqual(result);
});

test('Test: 888888888', ()=>{
    
    const result = [];
    const ipCollection = ipBuilder.setString('888888888').build().sort();

    expect(ipCollection).toEqual(result);
});