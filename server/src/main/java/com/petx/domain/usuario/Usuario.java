package com.petx.domain.usuario;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
public class Usuario {

    @Id
    private UUID uuid;

    @Column(length = 100)
    private String email;

    private String senha;

    @Column(length = 100)
    private String nome;

    @Column(length = 50)
    private String telefone;

    @Column(length = 100)
    private String cidade;

    @Column(length = 100)
    private String estado;

    private String idGoogle;

    private Boolean cadastroFinalizado;

    private LocalDateTime dtInclusao;

    @PrePersist
    protected void onCreate() {
        this.dtInclusao = LocalDateTime.now();
        if (this.cadastroFinalizado == null) {
            this.cadastroFinalizado = false;
        }
    }
}