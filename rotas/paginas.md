- Aluno

| Descrição                                     | Método | Rota                | Body |
| --------------------------------------------- | ------ | ------------------- | ---- |
| Criação de perfil (Apenas Admin)              | POST   | /criar-aluno        |      |
| Ver turmas e matérias em que está matriculado | GET    | /turmas             |      |


- Perfil

| Descrição                                     | Método | Rota       | Body |
| --------------------------------------------- | ------ | ---------- | ---- |
| Visualização de perfil                        | GET    | /perfil    |      |

- Login

| Descrição                                     | Método | Rota       | Body |
| --------------------------------------------- | ------ | ---------- | ---- |
| Login                                         | POST   | /login     |      |

- Professores

| Descrição                           | Método | Rota       | Body |
| ----------------------------------- | ------ | ---------- | ---- |
| Criação de professor (Apenas Admin) | POST   | /professor |      |
| Criação de turmas                   | POST   | /turma     |      |
| Deletar turmas                      | DELETE | /turma     |      |
| Alterar turmas                      | PUT    | /turma     |      |
| Acessar a turma e ver informações   | GET    | /inscricao |      |

- Inscrições

| Descrição                                   | Método | Rota                | Body |
| ------------------------------------------- | ------ | ------------------- | ---- |
| Aluno logado deve se inscrever em uma turma | POST   | /inscricao          |      |
| Remover inscrições em turmas 				  | DELETE | /cancelar-inscricao |      |

- Disciplinas

| Descrição                                   | Método | Rota        | Body |
| ------------------------------------------- | ------ | ----------- | ---- |
| Ver as disciplinas                          | POST   | /disciplina |      |
| Ver as turmas de cada disciplina            | GET    | /turma      |      |