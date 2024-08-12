package com.petx.api.dto.Usuario;

import jakarta.validation.constraints.*;
import lombok.Data;
import java.util.UUID;

@Data
public class UsuarioDTO {

    private UUID uuid;

    @NotBlank
    @NotNull
    @Email
    @Size(max = 100, message = "Email deve ter no maximo 100 caracteres")
    private String email;

    @NotBlank
    @NotNull
    @Size(max = 100, message = "Senha deve ter no maximo 100 caracteres")
    private String senha;

    @NotNull
    @NotBlank
    @Size(max = 100, message = "Nome deve ter no maximo 100 caracteres")
    private String nome;

    @NotNull
    @NotBlank
    @Size(max = 50, message = "Telefone deve ter no maximo 50 caracteres")
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