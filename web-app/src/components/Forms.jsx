import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Forms({ note, saveNote, deleteNote, searchNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setContent(note.content);
        }
    }, [note]);

    if (note == undefined) {
        return (
            <p>Sélectionner une note</p>
        )
    }

    return (
        <form className="Form">
            <input className="Note-editable Note-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className="Note-editable Note-content" value={content} onChange={(e) => setContent(e.target.value)} />
            <div className="Note-actions">
                <div>
                    <button
                        className="Button-save-note"
                        type="button"
                        onClick={function () {
                            /* Appel de la fonction saveNote au clic du bouton */
                            saveNote(title, content)
                        }
                        }
                    >
                        Enregistrer
                    </button>
                    <button
                        className="Button-delete-note"
                        /* Appel de la fonction deleteNote au clic du bouton */
                        type="button"
                        onClick={function () {
                            Swal.fire({
                                title: "Supprimer la note ?",
                                text: "Cette action est irréversible.",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonText: "C'est un oui !",
                                confirmButtonColor: "#218838",
                                cancelButtonText: "Jamais !",
                                cancelButtonColor: "#c82333",
                                cancelBorberButtonColor: "#bd2130",
                                focusCancel: true,
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    deleteNote()
                                }
                            });
                        }
                        }
                    >
                        Supprimer
                    </button>
                </div>
                <div>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            className="Input-Search"
                            autoComplete="off"
                            onChange={function (e) {
                                setSearchValue(e.target.value)
                            }}
                            placeholder="Chercher une note"
                        />
                        <button
                            className="Button-Search-Note"
                            onClick={function (e) {
                                e.preventDefault();
                                searchNote(searchValue);
                            }}
                            type="submit"
                        >
                            Chercher
                        </button>
                </div>
            </div>
        </form>
    )
}