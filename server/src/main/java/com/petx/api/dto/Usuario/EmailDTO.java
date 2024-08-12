package com.petx.api.dto.Usuario;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class EmailDTO {

    @NotBlank
    @NotNull
    @Email(message = "Email invalido!")
    @Size(max = 100, message = "Email deve ter no maximo 100 caracteres")
    private String email;
}