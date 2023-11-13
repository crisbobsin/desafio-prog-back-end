CREATE TABLE aluno(
	id int unsigned not null auto_increment,
	nome varchar(100) not null,
    matricula int not null,
    curso varchar(100) not null,
    PRIMARY KEY (id)
);

CREATE TABLE professor(
    id int unsigned not null auto_increment,
    nome varchar(100) not null,
    PRIMARY KEY (id)
);

CREATE TABLE disciplina(
    id int unsigned not null auto_increment,
    nome varchar(100) not null,
    PRIMARY KEY (id)
);

CREATE TABLE turma(
    numero_turma int,
    turno int,
    id_professor int unsigned not null,
    id_disciplina int unsigned not null,
    PRIMARY KEY (numero_turma),
    CONSTRAINT fk_professor_id FOREIGN KEY (id_professor) REFERENCES professor (id),
    CONSTRAINT fk_disciplina_id FOREIGN KEY (id_disciplina) REFERENCES disciplina (id)
);

CREATE TABLE inscricoes(
    id int unsigned not null auto_increment,
    id_aluno int unsigned not null,
    numero_turma int,
    PRIMARY KEY (id),
    CONSTRAINT fk_aluno_id_aluno FOREIGN KEY (id_aluno) REFERENCES aluno (id),
    CONSTRAINT fk_turma_numero_turma FOREIGN KEY (numero_turma) REFERENCES turma (numero_turma)
);