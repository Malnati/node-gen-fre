// src/types/InputPropsInterfaces.ts

import { Component, ReactNode } from 'react';
import { InputProps } from 'react-admin';
import { StackProps, SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';  
import { AlignmentButtons, ClearButtons, FormatButtons, LevelSelect, LinkButtons, ListButtons, QuoteButtons, RichTextInputToolbar } from 'ra-input-rich-text';
import { EditorOptions } from '@tiptap/core';
import { SwitchProps } from '@mui/material/Switch';
import { DropzoneOptions } from 'react-dropzone';
import { IId } from './IMetadata';

interface CommonInputProps extends Omit<InputProps<any>, 'id' | 'sx' | 'format' | 'parse' >, IId {
    source: string;               // Name of the entity property to use for the input value
    className?: string;           // Class name (usually generated by JSS) to customize the look and feel of the field element itself
    defaultValue?: any;           // Default value of the input.
    readOnly?: boolean;           // If true, the input is in read-only mode.
    disabled?: boolean;           // If true, the input is disabled.
    fullWidth?: boolean;          // If false, the input will not expand to fill the form width
    helperText?: string;          // Text to be displayed under the input (cannot be used inside a filter)
    label?: string | false;       // Input label. In i18n apps, the label is passed to the translate function. When omitted, the source property is humanized and used as a label. Set label={false} to hide the label.
}

export interface IBooleanInputProps extends CommonInputProps {
    options?: SwitchProps; // Use o suporte de opções para passar qualquer opção suportada pelos componentes Switch da UI do Material. Por exemplo, aqui está como definir um ícone marcado personalizado
}

export interface ICheckboxGroupInputProps extends CommonInputProps {
    labelPlacement?: 'end' | 'start' | 'top' | 'bottom';   // Posição do label em relação ao grupo de checkboxes
    optionValue?: string;                                  // Valor da opção, que será usado como `id` no form state
    translateChoice?: boolean;                             // Define se o texto da opção será traduzido
}

// Definindo o tipo de locais aceitos
type LocaleOption = 
    | 'en-US' | 'en-GB' | 'en-CA' | 'en-AU' // English locales
    | 'pt-BR' | 'pt-PT'                      // Portuguese locales
    | 'es-ES' | 'es-MX' | 'es-AR'            // Spanish locales
    | 'fr-FR' | 'fr-CA'                      // French locales
    | 'de-DE'                                // German locale
    | 'it-IT'                                // Italian locale
    | 'ru-RU'                                // Russian locale
    | 'ja-JP'                                // Japanese locale
    | 'zh-CN' | 'zh-TW'                      // Chinese locales
    | 'ko-KR'                                // Korean locale
    | 'ar-SA'                                // Arabic locale
    | 'hi-IN'                                // Hindi locale
    | 'he-IL'                                // Hebrew locale
    | 'nl-NL'                                // Dutch locale
    | 'sv-SE'                                // Swedish locale
    | 'no-NO'                                // Norwegian locale
    | 'da-DK'                                // Danish locale
    | 'fi-FI'                                // Finnish locale
    | 'pl-PL'                                // Polish locale
    | 'tr-TR'                                // Turkish locale
    | 'cs-CZ'                                // Czech locale
    | 'hu-HU'                                // Hungarian locale
    | 'el-GR'                                // Greek locale
    | 'th-TH';                               // Thai locale

// Reutilizando o tipo LocaleOption nas interfaces

export interface IDateInputProps extends CommonInputProps {
    locale?: LocaleOption; // Usa o tipo de locais aceitos
    placeholder?: string;
}

export interface IDateTimeInputProps extends CommonInputProps {
    locale?: LocaleOption; // Usa o tipo de locais aceitos
    placeholder?: string;
}

// Definindo o tipo de opções aceitáveis para a propriedade `accept`
type FileAcceptOption = 
    | 'image/*'         // Imagens genéricas
    | 'image/jpeg'      // Imagens JPEG
    | 'image/png'       // Imagens PNG
    | 'image/gif'       // Imagens GIF
    | 'image/webp'      // Imagens WebP
    | 'video/*'         // Vídeos genéricos
    | 'video/mp4'       // Vídeos MP4
    | 'video/ogg'       // Vídeos Ogg
    | 'video/webm'      // Vídeos WebM
    | 'audio/*'         // Áudios genéricos
    | 'audio/mpeg'      // Áudios MP3
    | 'audio/ogg'       // Áudios Ogg
    | 'audio/wav'       // Áudios WAV
    | 'application/pdf' // Arquivos PDF
    | 'application/msword'              // Arquivos Word .doc
    | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // Arquivos Word .docx
    | 'application/vnd.ms-excel'        // Arquivos Excel .xls
    | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'       // Arquivos Excel .xlsx
    | 'application/vnd.ms-powerpoint'   // Arquivos PowerPoint .ppt
    | 'application/vnd.openxmlformats-officedocument.presentationml.presentation' // Arquivos PowerPoint .pptx
    | 'application/zip'                 // Arquivos ZIP
    | 'application/x-7z-compressed'     // Arquivos 7z
    | 'application/x-rar-compressed'    // Arquivos RAR
    | 'application/json'                // Arquivos JSON
    | 'text/csv'                        // Arquivos CSV
    | 'text/plain'                      // Arquivos de texto simples
    | '.pdf'                            // Extensão .pdf
    | '.doc'                            // Extensão .doc
    | '.docx'                           // Extensão .docx
    | '.xls'                            // Extensão .xls
    | '.xlsx'                           // Extensão .xlsx
    | '.ppt'                            // Extensão .ppt
    | '.pptx'                           // Extensão .pptx
    | '.zip'                            // Extensão .zip
    | '.rar'                            // Extensão .rar
    | '.7z'                             // Extensão .7z
    | '.csv'                            // Extensão .csv
    | '.json'                           // Extensão .json
    | '.txt';                           // Extensão .txt

    // Aplicando `FileAcceptOption` na interface `IFileInputProps`
export interface IFileInputProps extends CommonInputProps {
    accept?: FileAcceptOption; // Usa o tipo de opções de arquivos aceitos
    minSize?: number; // Tamanho mínimo do arquivo em bytes
    maxSize?: number; // Tamanho máximo do arquivo em bytes
    multiple?: boolean;   // Permite o upload de múltiplos arquivos se true
    placeholder?: string; // Texto de placeholder para o campo de upload
}

// Definindo o tipo para opções de arquivos de imagem aceitos
type ImageAcceptOption = 
    | 'image/*'      // Aceita qualquer tipo de imagem
    | 'image/jpeg'   // Imagens JPEG
    | 'image/png'    // Imagens PNG
    | 'image/gif'    // Imagens GIF
    | 'image/webp'   // Imagens WebP
    | 'image/bmp'    // Imagens BMP
    | 'image/svg+xml' // Imagens SVG
    | '.jpg'         // Extensão .jpg
    | '.jpeg'        // Extensão .jpeg
    | '.png'         // Extensão .png
    | '.gif'         // Extensão .gif
    | '.webp'        // Extensão .webp
    | '.bmp'         // Extensão .bmp
    | '.svg';        // Extensão .svg


    // Aplicando `ImageAcceptOption` na interface `IImageInputProps`
export interface IImageInputProps extends CommonInputProps {
    accept?: ImageAcceptOption; // Usa o tipo de opções de imagens aceitas
    multiple?: boolean;   // Permite o upload de múltiplos arquivos se true
    placeholder?: string; // Texto de placeholder para o campo de upload
    minSize?: number; // Tamanho mínimo do arquivo em bytes
    maxSize?: number; // Tamanho máximo do arquivo em bytes
}

export interface INumberInputProps extends CommonInputProps {
    step?: number; // Define o incremento ou decremento em cada interação com o input
    min?: number; // Valor mínimo permitido
    max?: number; // Valor máximo permitido
}

export interface IPasswordInputProps extends CommonInputProps {
    // Nenhuma propriedade adicional é necessária além das comuns para este tipo de input,
    // pois o PasswordInput do react-admin não define opções extras específicas.
    autoComplete?: 'off' | 'new-password' | 'current-password'; // Controle do autocompletar
}

export interface IReferenceInputProps extends CommonInputProps {
    reference: string; // Nome do recurso de referência, obrigatório para o ReferenceInput
    perPage?: number; // Número de registros por página
    allowEmpty?: boolean; // Permite seleção de valor vazio
    optionValue?: string; // Define qual campo usar como valor
}

// Definindo o tipo possível para a toolbar, baseado nos componentes permitidos pelo RichTextInputToolbar
type ToolbarComponent =
    | ReactNode
    | typeof RichTextInputToolbar
    | typeof LevelSelect
    | typeof FormatButtons
    | typeof ListButtons
    | typeof LinkButtons
    | typeof QuoteButtons
    | typeof ClearButtons
    | typeof AlignmentButtons;

export interface IRichTextInputProps extends CommonInputProps {
    toolbar?: ToolbarComponent | ToolbarComponent[]; // Define os botões a serem exibidos na barra de ferramentas
}

export interface ISearchInputProps extends CommonInputProps {
    alwaysOn?: boolean; // Mantém o campo de pesquisa sempre visível
    placeholder?: string; // Texto de placeholder para o campo de pesquisa
    resettable?: boolean; // Permite que o campo seja resetado para o valor inicial
}

export interface ISelectInputProps extends CommonInputProps {
    choices: Array<     | { id: string | number; name: string }  // Opção com `id` e `name`
                        | { id: string | number; key: string | number }  // Opção com `id` e `key`
                    >; // Array de objetos contendo `id` e `name` para cada opção
    createLabel: string; // Rótulo para a opção de criação
    disableValue?: boolean; // Campo personalizado usado nas opções para desativar algumas opções, padrão é 'disabled'
    emptyText?: string; // Texto exibido quando não há nenhuma opção selecionada
    emptyValue?: any; // Valor a ser considerado para a opção vazia
    isPending?: boolean; // Se verdadeiro, o componente exibirá um indicador de carregamento.
    optionValue?: string; // Valor a ser usado como valor real (ex.: 'id')
    resettable?: boolean; // Permite que o campo seja resetado para o valor inicial
    translateChoice?: boolean; // Habilita ou desabilita a tradução automática das opções
}

export interface ITextInputProps extends CommonInputProps {
    type?:  
    | "text"        // Texto genérico
    | "email"       // E-mail
    | "password"    // Senha
    | "tel"         // Telefone
    | "url"         // URL
    | "number"      // Número
    | "search"      // Pesquisa
    | "date"        // Data
    | "time"        // Hora
    | "datetime-local" // Data e Hora Local
    | "month"       // Mês
    | "week"        // Semana
    | "color";      // Cor
    resettable?: boolean; // Exibe um botão de reset para limpar o campo
    multiline?: boolean; // Habilita a área de texto multi-linha
    placeholder?: string; // Placeholder para entrada de texto
}

export interface ITimeInputProps extends CommonInputProps {
}

export interface ITranslatableInputsProps extends CommonInputProps {
    locales: string[]; // Lista de códigos de idioma, ex: ['en', 'fr', 'de']
    defaultLocale?: string; // Locale padrão usado para a entrada (ex.: 'en')
    fullWidth?: boolean; // Se verdadeiro, o input ocupará toda a largura do container
    groupKey?: string; // Opcional: chave de grupo para sincronizar translações de diferentes campos
    selector?: ReactNode; // Componente React para selecionar o idioma
    stackProps?: StackProps; // Propriedades do Stack do Material UI
    sx?: SxProps<Theme>; // Material UI shortcut for defining custom styles
}