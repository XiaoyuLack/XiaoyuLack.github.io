function jieguo() {
    let a = document.getElementById("1").value === '' ? '&ltitem:minecraft:air&gt' : '&ltitem:' + document.getElementById('1').value + '&gt';
    let b = document.getElementById("2").value === '' ? '&ltitem:minecraft:air&gt' : '&ltitem:' + document.getElementById('2').value + '&gt';
    let c = document.getElementById("3").value === '' ? '&ltitem:minecraft:air&gt' : '&ltitem:' + document.getElementById('3').value + '&gt';
    let d = document.getElementById("4").value === '' ? '&ltitem:minecraft:air&gt' : '&ltitem:' + document.getElementById('4').value + '&gt';
    let e = document.getElementById("5").value === '' ? '&ltitem:minecraft:air&gt' : '&ltitem:' + document.getElementById('5').value + '&gt';
    let f = document.getElementById("6").value === '' ? '&ltitem:minecraft:air&gt' : '&ltitem:' + document.getElementById('6').value + '&gt';
    let g = document.getElementById("7").value === '' ? '&ltitem:minecraft:air&gt' : '&ltitem:' + document.getElementById('7').value + '&gt';
    let h = document.getElementById("8").value === '' ? '&ltitem:minecraft:air&gt' : '&ltitem:' + document.getElementById('8').value + '&gt';
    let i = document.getElementById("9").value === '' ? '&ltitem:minecraft:air&gt' : '&ltitem:' + document.getElementById('9').value + '&gt';

    let dmn = '"' + document.getElementById('dmname').value + '"';
    let jqn = '&lt' + "item:" + document.getElementById('jqname').value + '&gt';

    document.getElementById('p_jieguo').innerHTML = `craftingTable.addShaped(${dmn},${jqn},[[${a},${b},${c}],[${d},${e},${f}],[${g},${h},${i}]])`
}

document.getElementById('touch').addEventListener("click", jieguo);

console.log(a)

