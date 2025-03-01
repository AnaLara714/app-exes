# App .Exes

O app .Exes reúne as atividades acadêmicas que são executadas no campus de Sobral da UFC.

## Sobre

Projeto final da disciplina de desenvolvimento para dispositivos móveis, o app consiste em um projeto ficticio para registro e acompanhamento das atividades acadêmcias.

O .Exes realiza a listagem das atividades em categorias de atividade de pesquisa, extensão, evento e edital. No cadastro da atividade, feita pelo usuário que entrar com login, é solicitado o título, nome do responsável, resumo da atividade, categoria, curso (opcional), data de cadastro e o link para mais informações. O usuário pode também editar e deletar atividade cadastrada.

## Tecnologias

- React Native com Expo

## Funcionalidades

- CRUD das atividades feitas por usuário cadastrados
- Atividades listadas nas categorias correspondentes

## Atualizações futuras

- Válidar acesso no login (pois no momento é permitido acessar com qualquer credencial no campo de login)
- Armazenar os dados em um banco de dados
- Filtro por curso
- Filtro por pesquisa de título e responsável

## Como acessar

1. No seu terminal faça o clone do projeto
   ```bash
   git clone https://github.com/AnaLara714/app-exes.git
   ```
2. Entre na pasta

```bash
 cd app-exes
```

3. Instale as dependencias

   ```bash
   npm install
   ```

4. Inicialize o app

   ```bash
    npm run dev
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
