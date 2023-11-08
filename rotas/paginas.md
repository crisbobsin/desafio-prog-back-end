- Aluno

| Descrição                                     | Método | Rota       | Body |
| --------------------------------------------- | ------ | ---------- | ---- |
| Login                                         | POST   | /login     |      |
| Criação de perfil                             | POST   | /perfil    |      |
| Visualização de perfil                        | GET    | /perfil    |      |
| Ver turmas e matérias em que está matriculado | GET    | /inscricao |      |
| Remover inscrições em turmas 				    | DELETE | /inscricao |      |

- Professores

| Descrição                           | Método | Rota       | Body |
| ----------------------------------- | ------ | ---------- | ---- |
| Criação de professor (Apenas Admin) | POST   | /professor |      |
| Visualização de perfil              | GET    | /professor |      |
| Criação de turmas                   | POST   | /turma     |      |
| Deletar turmas                      | DELETE | /turma     |      |
| Alterar turmas                      | PUT    | /turma     |      |

- Inscrições

| Descrição                                   | Método | Rota       | Body |
| ------------------------------------------- | ------ | ---------- | ---- |
| Aluno logado deve se inscrever em uma turma | POST   | /inscricao |      |

- Disciplinas

| Descrição                                   | Método | Rota        | Body |
| ------------------------------------------- | ------ | ----------- | ---- |
| Ver as disciplinas                          | POST   | /disciplina |      |
| Ver as turmas de cada disciplina            | GET    | /turma      |      |

- Turma

| Descrição                                   | Método | Rota       | Body |
| ------------------------------------------- | ------ | ---------- | ---- |
| Acessar a turma e ver informações           | GET    | /inscricao |      |