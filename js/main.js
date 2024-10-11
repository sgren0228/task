$(function(){
   // DOM要素の取得
   const taskInput = document.getElementById('task-input');
   const addTaskButton = document.getElementById('add-task-button');
   const taskList = document.getElementById('task-list');

   // タスクを追加する関数
   function addTask() {
       const taskText = taskInput.value.trim();

       if (taskText === '') {
           alert('タスクを入力してください。');
           return;
       }

       // タスクの要素を作成
       const li = document.createElement('li');

       const span = document.createElement('span');
       span.textContent = taskText;
       span.addEventListener('click', function() {
           this.parentElement.classList.toggle('completed');
       });

       const deleteButton = document.createElement('button');
       deleteButton.textContent = '削除';
       deleteButton.className = 'delete-button';
       deleteButton.addEventListener('click', function() {
           this.parentElement.remove();
       });

       li.appendChild(span);
       li.appendChild(deleteButton);
       taskList.appendChild(li);

       // 入力フィールドをクリア
       taskInput.value = '';
       taskInput.focus();
   }

   // イベントリスナーの設定
   addTaskButton.addEventListener('click', addTask);

   // Enterキーでタスクを追加
   taskInput.addEventListener('keyup', function(event) {
       if (event.key === 'Enter') {
           addTask();
       }
   });

});