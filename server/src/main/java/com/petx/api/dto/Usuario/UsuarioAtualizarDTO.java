package com.petx.api.dto.Usuario;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.UUID;

@Data

public class UsuarioAtualizarDTO {

    private UUID uuid;

    @NotNull
    @NotBlank
    @Size(max = 100, message = "Nome deve ter no maximo 100 caracteres")
    private String nome;

    @NotNull
    @NotBlank
    @Size(max = 50, message = "Email deve ter no maximo 50 caracteres")
    private String telefone;

    @NotNull
    @NotBlank
    @Size(max = 100, message = "Cidade deve ter no maximo 100 caracteres")
    private String cidade;

    @NotNull
    @NotBlank
    @Size(max = 100, message = "Estado deve ter no maximo 100 caracteres")
    private String estado;
}
