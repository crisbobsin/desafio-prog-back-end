SELECT * FROM aluno;
SELECT * FROM professor;
SELECT * FROM disciplina;
SELECT * FROM turma;
SELECT * FROM inscricoes;

SELECT disciplina.nome, turma.numero_turma, turma.turno
FROM turma
LEFT JOIN disciplina
ON turma.id_disciplina = disciplina.id;