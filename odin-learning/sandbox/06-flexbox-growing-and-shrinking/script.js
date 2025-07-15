// Demo 1: flex-grow
function updateGrow() {
  const g1 = document.getElementById('grow1').value;
  const g2 = document.getElementById('grow2').value;
  const g3 = document.getElementById('grow3').value;
  document.getElementById('grow-item-1').style.flexGrow = g1;
  document.getElementById('grow-item-2').style.flexGrow = g2;
  document.getElementById('grow-item-3').style.flexGrow = g3;
}

// Demo 2: flex-shrink
function updateShrink() {
  const s1 = document.getElementById('shrink1').value;
  const s2 = document.getElementById('shrink2').value;
  const s3 = document.getElementById('shrink3').value;
  document.getElementById('shrink-item-1').style.flexShrink = s1;
  document.getElementById('shrink-item-2').style.flexShrink = s2;
  document.getElementById('shrink-item-3').style.flexShrink = s3;
}

// Demo 3: flex-basis
function updateBasis() {
  const b1 = document.getElementById('basis1').value;
  const b2 = document.getElementById('basis2').value;
  const b3 = document.getElementById('basis3').value;
  document.getElementById('basis-item-1').style.flexBasis = b1;
  document.getElementById('basis-item-2').style.flexBasis = b2;
  document.getElementById('basis-item-3').style.flexBasis = b3;
}
