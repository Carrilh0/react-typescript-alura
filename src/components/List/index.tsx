import React from 'react'

function Lista() {
  const tarefas = [{
    name: 'React',
    time: '02:00:00'
  },{
    name: 'Javascript',
    time: '01:00:00'
  },{
    name: 'Typescript',
    time: '03:00:00'
  }]
  return (
    <aside>
      <h2>Estudos do Dia</h2>
        <ul>
          {tarefas.map((item, index) => ( // () retorna JSX e {} um escopo | Uma renderização sempre precisa do key, são usadas no React para identificar quais itens na lista são alterados, atualizados ou excluídos. (Ideal que seja um ID unico)
            <li key={index}>
              <h3>
                {item.name}
              </h3>
              <span>
                {item.time}
              </span>
            </li>
          ))}
        </ul>
    </aside>
  )
}

export default Lista