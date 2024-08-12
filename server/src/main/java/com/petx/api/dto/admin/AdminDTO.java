package com.petx.api.dto.admin;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class AdminDTO {

    private Long id;

    @NotBlank
    @NotNull
    @Size(max = 100, message = "Usuario deve ter no maximo 100 caracteres")
    private String usuario;

    @NotBlank
    @NotNull
    @Size(max = 100, message = "Email deve ter no maximo 100 caracteres")
    private String senha;
}