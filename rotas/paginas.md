- Aluno

| Descrição                                     | Método | Rota                | Body |
| --------------------------------------------- | ------ | ------------------- | ---- |
| Criação de perfil (Apenas Admin)              | POST   | /criar-aluno        |      | OK
| Ver turmas e matérias em que está matriculado | GET    | /turmas             |      | OK


- Perfil

| Descrição                                     | Método | Rota       | Body |
| --------------------------------------------- | ------ | ---------- | ---- |
| Visualização de perfil                        | GET    | /perfil    |      | OK

- Login

| Descrição                                     | Método | Rota       | Body |
| --------------------------------------------- | ------ | ---------- | ---- |
| Login                                         | POST   | /login     |      | OK

- Professores

| Descrição                           | Método | Rota       | Body |
| ----------------------------------- | ------ | ---------- | ---- |
| Criação de turmas                   | POST   | /turma     |      | OK
| Deletar turmas                      | DELETE | /turma     |      | OK
| Alterar turmas                      | PUT    | /turma     |      | OK
| Acessar a turma e ver informações   | GET    | /inscricao |      | OK

- Inscrições

| Descrição                                   | Método | Rota                | Body |
| ------------------------------------------- | ------ | ------------------- | ---- |
| Aluno logado deve se inscrever em uma turma | POST   | /inscricao          |      | OK
| Remover inscrições em turmas 				  | DELETE | /cancelar-inscricao |      | OK

- Disciplinas

| Descrição                                   | Método | Rota        | Body |
| ------------------------------------------- | ------ | ----------- | ---- |
| Criar disciplinas                           | POST   | /disciplina |      | OK
| Deletar disciplinas                         | POST   | /disciplina |      | OK
| Ver as disciplinas                          | POST   | /disciplina |      | OK
| Ver as turmas de cada disciplina            | GET    | /turma      |      | OK