
var input = window.document.querySelector("#barra")

var lista = []

input.value = lista

  main = function () {
    
    numeroZero = function () {

        input.value = lista
    
            var zero = window.document.querySelector("#n0")
    
            zero.addEventListener('click', function () {
                
             lista.push(0)   
    
            });
        }
    
        numeroZero()
    
        numeroUm = function () {

            input.value = lista
    
            var um = window.document.querySelector("#n1")
        
            um.addEventListener('click', function () {
                    
             lista.push(0) 
        
            });
        }
    
        numeroUm()
    
        numeroDois = function () {
    
    
            input.value = lista
    
            var dois = window.document.querySelector("#n2")
            
            dois.addEventListener('click', function () {
                        
            lista.push(2)   
            
        }
            
        )}
    
        numeroDois()
    
        numeroTres = function () {
    
    
            input.value = lista
    
            var tres = window.document.querySelector("#n3")
            
            tres.addEventListener('click', function () {
                        
                lista.push(3) 
            
        }
            
        )} 
        
        numeroTres()
    
    
        console.log(lista)}
        
    main()