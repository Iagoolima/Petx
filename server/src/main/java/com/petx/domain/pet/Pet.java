package com.petx.domain.pet;

import com.petx.domain.usuario.Usuario;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import lombok.*;
import java.util.Date;
import java.util.UUID;

@Data
@Entity
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID uuid;

    @ManyToOne
    @JoinColumn(name = "uuid_dono")
    private Usuario dono;

    @OneToOne
    @JoinColumn
    private PetImagem image;

    @Column(length = 100)
    private String nome;

    @Column(length = 50)
    private String especie;

    @Column(length = 100)
    private String raca;

    @Column(length = 50)
    private String cor;

    @Column(length = 50)
    private String porte;

    @Column(length = 50)
    private String peso;

    @Column(length = 50)
    private String genero;

    private Boolean cadastrado;

    private Date dataNascimento;

    private Date dataCadastro;

    private Date dataInclusao;

    private Boolean qrcodeGerado;

    @PrePersist
    protected void onCreate() {
        dataInclusao = new Date();
    }
}