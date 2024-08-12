package com.petx.api.dto.pet;

import com.petx.api.dto.Usuario.UsuarioDTO;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.UUID;

@Data
@Component
public class PetDTO {

    private UUID uuid;

    private UsuarioDTO dono;

    @NotBlank
    @NotNull
    @Size(max = 100, message = "Nome deve ter no maximo 100 caracteres")
    private String nome;

    @NotBlank
    @NotNull
    @Size(max = 50, message = "Especie deve ter no maximo 50 caracteres")
    private String especie;

    @NotBlank
    @NotNull
    @Size(max = 100, message = "Raca deve ter no maximo 100 caracteres")
    private String raca;

    @NotBlank
    @NotNull
    @Size(max = 50, message = "Especie deve ter no maximo 50 caracteres")
    private String cor;

    @Size(max = 50, message = "Porte deve ter no maximo 50 caracteres")
    private String porte;

    @Size(max = 50, message = "Peso deve ter no maximo 50 caracteres")
    private String peso;

    @NotBlank
    @NotNull
    @Size(max = 50, message = "Genero deve ter no maximo 100 caracteres")
    private String genero;

    private Boolean cadastrado;

    private Date dataNascimento;

    private Date dataCadastro;

    private String linkImagem;
}