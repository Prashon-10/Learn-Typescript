interface ICRUD {
    create(): void;
    read(): void;
    update(): void;
    delete(): void;
}

class Students implements ICRUD {
    create(): void {
        console.log("create");
    }
    read(): void {
        console.log("read");
    }
    update(): void {
        console.log("update");
    }
    delete(): void {
        console.log("delete");
    }
}