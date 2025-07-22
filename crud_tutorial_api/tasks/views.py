from rest_framework import viewsets

# Show data to JSON
from .serializer import TaskSerializer

# Make the operations
from .models import Task

# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()



