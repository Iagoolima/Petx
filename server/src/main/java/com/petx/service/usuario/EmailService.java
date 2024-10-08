package com.petx.service.usuario;

import com.petx.domain.EmailMensagem;
import com.petx.domain.usuario.EmailValidar;
import com.petx.domain.usuario.ValidacaoEmail;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
import java.util.UUID;

@Service
public class EmailService {

    @Value("${smtp.host}")
    private String host;

    @Value("${smtp.port}")
    private String port;

    @Value("${smtp.username}")
    private String username;

    @Value("${smtp.password}")
    private String password;

    private Session configureSession() {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", port);

        return Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });
    }

    public void enviarEmail(EmailMensagem email){

        try {
            Session session = configureSession();

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email.getDestinatario()));
            message.setSubject(email.getTitulo());
            message.setText(email.getMensagem());

            Transport.send(message);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao enviar email", e);
        }
    }
}