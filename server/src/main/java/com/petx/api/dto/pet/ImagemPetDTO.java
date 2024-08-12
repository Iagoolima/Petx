package com.petx.api.dto.pet;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@Data
public class ImagemPetDTO {

    @NotNull
    private MultipartFile imagemPet;

    @NotNull
    private UUID uuid;
}
