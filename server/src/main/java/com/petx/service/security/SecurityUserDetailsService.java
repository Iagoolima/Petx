package com.petx.service.security;

import com.petx.domain.admin.Admin;
import com.petx.domain.usuario.Usuario;
import com.petx.repository.AdminRepository;
import com.petx.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class SecurityUserDetailsService implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuarioEncontrado = usuarioRepository
                .findByEmail(email)
                .orElse(null);
        if(usuarioEncontrado == null){
            return null;
        }
        String password = usuarioEncontrado.getSenha() != null ? usuarioEncontrado.getSenha() : "";

        return User.builder()
                .username(usuarioEncontrado.getEmail())
                .password(password)
                .roles("USER")
                .build();
    }

    public UserDetails loadUserByAdminName(String usuario) throws UsernameNotFoundException {
        Admin adminEncontrado = adminRepository
                .findByUsuario(usuario)
                .orElseThrow(() -> new UsernameNotFoundException("Não foi possível encontrar um administrador pelo usuario informado. "
                        + "usuario não cadastrado em nossa base de dados."));

        return User.builder()
                .username(adminEncontrado.getUsuario())
                .password(adminEncontrado.getSenha())
                .roles("ADMIN")
                .build();
    }

}
