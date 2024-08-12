package com.petx.api.dto.Usuario;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class CodigoDTO {

    @NotNull
    @NotBlank
    @Size(max = 100, message = "Codigo deve ter no maximo 100 caracteres")
    private String codigo;
}