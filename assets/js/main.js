document.addEventListener('DOMContentLoaded', function() {
    const presupuestoInput = document.getElementById('presupuestoInput');
    const calcularBtn = document.getElementById('calcularBtn');
    const NombreGastoInput = document.getElementById('NombreGastoInput');
    const montoPresupuestoInput = document.getElementById('montoPresupuestoInput');
    const agregarGastoInput = document.getElementById('agregarGastoInput');
    const montoPresupuesto = document.getElementById('montoPresupuesto');
    const montoGasto = document.getElementById('montoGasto');
    const montoBalance = document.getElementById('montoBalance');
    const listaGastos = document.getElementById('listaGastos');
  
    let presupuesto = 0;
    let gastos = 0;
    let balance = 0;
    let gastoId = 0;
  
    calcularBtn.addEventListener('click', function() {
      presupuesto = parseInt(presupuestoInput.value);
      montoPresupuesto.textContent = presupuesto;
      updateBalance();
    });
  
    agregarGastoInput.addEventListener('click', function() {
      const nombreGasto = NombreGastoInput.value;
      const montoGasto = parseInt(montoPresupuestoInput.value);
  
      if (nombreGasto !== '' && montoGasto) {
        const gasto = {
          id: gastoId,
          nombre: nombreGasto,
          monto: montoGasto
        };
        gastoId++;
        gastos += montoGasto;
  
        const li = document.createElement('li');
        const nombreGastoSpan = document.createElement('span');
        const montoGastoSpan = document.createElement('span');
        const borrarBtn = document.createElement('button');
        
        nombreGastoSpan.textContent = gasto.nombre;
        montoGastoSpan.textContent = `$${gasto.monto}`;
        borrarBtn.textContent = 'Eliminar';
        borrarBtn.dataset.id = gasto.id;
        borrarBtn.classList.add('borrar-btn');
        
        li.appendChild(nombreGastoSpan);
        li.appendChild(montoGastoSpan);
        li.appendChild(borrarBtn);
        listaGastos.appendChild(li);
  
        montoGastos.textContent = gastos;
        updateBalance();
  
        NombreGastoInput.value = '';
        montoPresupuestoInput.value = '';
  
        borrarBtn.addEventListener('click', function() {
          const gastoId = parseInt(borrarBtn.dataset.id);
          const listItem = borrarBtn.closest('li');
          const montoGastoToRemove = parseInt(montoGastoSpan.textContent.slice(1));
  
          gastos -= montoGastoToRemove;
          montoGastos.textContent = gastos;
          updateBalance();
  
          listItem.remove();
        });
      }
    });
  
    function updateBalance() {
      balance = presupuesto - gastos;
      montoBalance.textContent = balance;
    }
  });

