fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
  res.json().then((data) => {
    if (data.length > 0) {

      var array = data.map(t=>{
        return [t.userId, t.id, t.title, t.body]
      })

      $('.tabela').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json"
        },
        data: array
      });
    }
  });
});
